let hello: string = "World";

/**
 * A function that sets the name of the message.
 *
 * @type {(name: Required<string>) => void}
 */
const setName = (name:Required<string>) => {
    if (!name) throw "Invalid name value";
    hello = name;
}

/**
 * A function that gets the message.
 *
 * @type {(name?: string) => string}
 */
const getMessage = (name?: string ):string =>  {
    if (name) setName(name);
    return `Hello ${hello}`;
}

export { getMessage, setName };