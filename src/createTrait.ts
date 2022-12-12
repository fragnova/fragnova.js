enum VariableType {
    Bool = "Type.Bool",
    Int = "Type.Int",
    Float = "Type.Float",
    Bytes = "Type.Bytes",
    String = "Type.String",
    Image = "Type.Image",
    Audio = "Type.Audio",
}


/**
 * Create a Shards Trait using the Object `attributes`
 * @param name Name of the Shards Trait
 * @param attributes **Object** where a **key** represents a **trait attribute** and the **value (of the key)** represents the **type of the trait attribute**.
 * @returns **Binary Representation** of the **Created Shards Trait's EDN Notation**
 */
function createTrait(name: string, attributes: {[key: string]: VariableType | VariableType[]}): Uint8Array {

    function isValidString(s: string): boolean {
        return /^[a-zA-Z]+$/.test(s[0]);
    }

    if (!isValidString(name)) throw Error("The parameter 'name' is not a valid string");
    if (Object.keys(attributes).length === 0) throw Error("The parameter 'attributes' must not be empty");

    let ednTrait = "";

    ednTrait += `(trait ${name}\n`;

    for (let attributeName of Object.keys(attributes).sort()) {
        if (!isValidString(attributeName)) throw Error(`The attribute '${attributeName}' is not a valid string`);

        ednTrait += `:${attributeName}\n`;
        let attributeType = attributes[attributeName];
        if (Array.isArray(attributeType)) {
            ednTrait += `[${attributeType.join(" ")}]\n`;
        } else {
            ednTrait += `${attributeType}\n`;
        }
    }

    ednTrait += ")\n";

    return (new TextEncoder()).encode(ednTrait);

}
