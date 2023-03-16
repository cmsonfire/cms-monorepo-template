let hello: string = "World";


const setName = (name:Required<string>) => {
    if (!name) throw "Invalid name value";
    hello = name;
}

const getMessage = (name?: string ):string =>  {
    if (name) setName(name);
    return `Hello ${hello}`;
}

export { getMessage, setName };