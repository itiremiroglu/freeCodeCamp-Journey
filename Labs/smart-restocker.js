const pantry = [
    { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
    { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
    "A10|Tomatoes|5|2027-01-01",
    "B21|Bananas|10|2027-01-01",
    "C32|Eggs|3|2027-01-01|fridge",
    "C32|Eggs|3|2027-01-01",
    "D43|Pineapples|0|2027-01-01",
    "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
    const shipment = [];
    const seenSkus = [];

    for (const str of rawData) {
        const [sku, name, qty, expires, zone] = str.split("|");
        if (seenSkus.includes(sku)) {
            continue;
        }
        seenSkus.push(sku);
        shipment.push({
            sku: sku,
            name: name,
            qty: Number(qty),
            expires: expires,
            zone: zone ? zone : "general"
        });
    }
    return shipment;
}

function planRestock(pantry, shipment) {
    const actions = [];
    const pantrySkus = [];
    for (const item of pantry) {
        pantrySkus.push(item.sku);
    }
    for (const item of shipment) {
        let type = "";
        if (item.qty <= 0) {
            type = "discard";
        } else if (pantrySkus.includes(item.sku)) {
            type = "restock";
        } else {
            type = "donate";
        }
        actions.push({ type: type, item: item });
    }
    return actions;
}

function groupByZone(actions) {
    const grouped = {};

    for (const action of actions) {
        const zone = action.item.zone;
        if (!grouped[zone]) {
            grouped[zone] = [];
        }
        grouped[zone].push(action);
    }
    return grouped;
}

function clonePantry(pantry) {
    const cloned = [];
    for (const item of pantry) {
        cloned.push({ ...item });
    }
    return cloned;
}

const parseShipment = parseShipment(rawData);
const actions = planRestock(pantry, parseShipment);
const groupedActions = groupByZone(actions);

console.log(groupedActions);