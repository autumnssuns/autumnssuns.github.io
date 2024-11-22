---
layout: "@layouts/ProseLayout.astro"
title: Python Snippets
---

# Python Snippets

## The Decorator

In Python, a decorator can wrap a function, method or class to modify its behaviour. I find this especially useful for implementing somewhat of a `middleware` pattern in Python. This can be quite helpful for a mono-lambda approach where a single lambda function is used to handle multiple routes.

### Example 1 - Registering routes

Let's say we have the following code in `lambda_function.py`:

```python
def action_1():
    return "Action 1"

def action_2():
    return "Action 2"

def action_3():
    return "Action 3"

routes = {
    "one": action_1,
    "two": action_2,
    "three": action_3
}

def handler(event, context):
    action = event.get("action")
    if action in routes:
        result = routes[action]()
        return {
            "statusCode": 200,
            "body": result
        }

    return {
        "statusCode": 404,
        "body": "Action not found"
    }
```

While we can keeps updating the `routes` dictionary as we add more actions, things can get messy quickly as the number of actions grow. Instead, what if we could do this:

```python
from routes import route, routes

@route("one")
def action_1():
    return "Action 1"

@route("two")
def action_2():
    return "Action 2"

@route("three")
def action_3():
    return "Action 3"

# The handler function remains the same
def handler(event, context):
    action = event.get("action")
    if action in routes:
        result = routes[action]()
        return {
            "statusCode": 200,
            "body": result
        }

    return {
        "statusCode": 404,
        "body": "Action not found"
    }
```

We can imagine as we add more actions, we can simply add more `@route` decorators to register them. This is made possible by an `routes.py` module that looks like this:

```python
routes = {}

def route(name):
    def wrapper(func):
        routes[name] = func
        return func
    return wrapper
```

We notice that `route` returns a `wrapper` function that returns the original function, while also registering it in the `routes` dictionary under the `name` key defined in the decorator.

We can imagine using it like so:

```python
# The function we want to register
def func():
    return "Hello"

# Since route(name) returns a function, `wrapper` is now a function
wrapper = route("hello")

# Since wrapper returns the original function, we can call it like so
func = wrapper(func)

# The original function isn't modified, but there is a side effect
# of adding it to the routes dictionary
print(routes["hello"] == func)  # True
print(routes["hello"]())        # Hello
```

And the `@` syntax is just syntactic sugar for the above.

```python
@route("hello")
def func():
    return "Hello"

print(routes["hello"] == func)  # True
print(routes["hello"]())        # Hello
```