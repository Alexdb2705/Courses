def announce(f):
    def wrapper(g, n):
        print("About to run the function...")
        f(g, n)
        print("Done with the function.")
    return wrapper

@announce
def hello(greeting, name):
    print(f"{greeting}, {name}!")

hello("Hi", "Alex")
announce(hello("Hi", "Alex"))