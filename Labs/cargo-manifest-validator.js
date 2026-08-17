let normalizeUnits = (manifest) => {
    const normalized = { ...manifest };
    if (normalized.unit === "lb") {
        normalized.weight = normalized.weight * 0.45;
        normalized.unit = "kg";
    }
    return normalized;
};

let validateManifest = (manifest) => {
    const errors = {};
    if (manifest.containerId === undefined) {
        errors.containerId = "Missing";
    } else if (typeof manifest.containerId !== "number" || !Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
        errors.containerId = "Invalid";
    }
    if (manifest.destination === undefined) {
        errors.destination = "Missing";
    } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
        errors.destination = "Invalid";
    }
    if (manifest.weight === undefined) {
        errors.weight = "Missing";
    } else if (typeof manifest.weight !== "number" || Number.isNaN(manifest.weight) || manifest.weight <= 0) {
        errors.weight = "Invalid";
    }
    if (manifest.unit === undefined) {
        errors.unit = "Missing";
    } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
        errors.unit = "Invalid";
    }
    if (manifest.hazmat === undefined) {
        errors.hazmat = "Missing";
    } else if (typeof manifest.hazmat !== "boolean") {
        errors.hazmat = "Invalid";
    }
    return errors;
};

let processManifest = (manifest) => {
    const errors = validateManifest(manifest);
    if (Object.keys(errors).length === 0) {
        const normalized = normalizeUnits(manifest);
        console.log(`Validation success: ${manifest.containerId}`);
        console.log(`Total weight ${normalized.weight} kg`);
    } else {
        console.log(`Validation error: ${manifest.containerId}`);
        console.log(errors);
    }
};