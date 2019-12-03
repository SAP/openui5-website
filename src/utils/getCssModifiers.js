import fp from "lodash/fp";

export default (styles, prefix) => {
    const lookupPrefix = `${prefix}_`;
    return (
        fp.flow([
            fp.filter(o => o.startsWith(lookupPrefix)),
            fp.uniq,
            fp.map(o => o.replace(lookupPrefix, "")),
        ])(Object.keys(styles))
    );
};
