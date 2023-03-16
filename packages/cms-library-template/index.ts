let hello: string = "World";

/**
 * A function that sets the name of the message.
 *
 */
const setName = (name:Required<string>):void => {
    if (!name) throw "Invalid name value";
    hello = name;
}

/**
 * A function that gets the message.
 *
 */
const getMessage = (name?: string ):string =>  {
    if (name) setName(name);
    return `Hello ${hello}`;
}

export { getMessage, setName };