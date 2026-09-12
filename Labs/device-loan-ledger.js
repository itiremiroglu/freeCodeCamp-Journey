function checkoutDevice(ledger, assetTag, borrower) {
    if (!ledger[assetTag]) {
        return {
            ledger: ledger,
            message: `Device ${assetTag} not found.`
        };
    }
    if (ledger[assetTag].status === "CheckedOut") {
        return {
            ledger: ledger,
            message: `Device ${assetTag} is already checked out.`
        };
    }
    const updatedLedger = JSON.parse(JSON.stringify(ledger));
    updatedLedger[assetTag].status = "CheckedOut";
    updatedLedger[assetTag].borrower = {
        name: borrower.name,
        email: borrower.email
    };
    return {
        ledger: updatedLedger,
        message: `Device ${assetTag} checked out to ${borrower.name}.`
    };
}

function checkinDevice(ledger, assetTag) {
    if (!ledger[assetTag]) {
        return {
            ledger: ledger,
            message: `Device ${assetTag} not found.`
        };
    }
    const updatedLedger = JSON.parse(JSON.stringify(ledger));
    updatedLedger[assetTag].status = "CheckedIn";
    updatedLedger[assetTag].borrower = { name: "", email: "" };
    updatedLedger[assetTag].dueDate = "";
    return {
        ledger: updatedLedger,
        message: `Device ${assetTag} checked in.`
    };
}

function listOverdueDevices(ledger, today) {
    const parseDate = (dateStr) => {
        const [m, d, y] = dateStr.split("/").map(Number);
        return y * 10000 + m * 100 + d;
    };
    const todayVal = parseDate(today);
    return Object.values(ledger).filter(device => device.status === "CheckedOut" && parseDate(device.dueDate) < todayVal).sort((a, b) => parseDate(a.dueDate) - parseDate(b.dueDate));
}

function serializeLedger(ledger) {
    return JSON.stringify(ledger);

}

function loadLedger(json) {
    return JSON.parse(json);
}