// Existing class with a specific interface
class OldInterface {
    specificRequest() {
        return 'OldInterface: Specific behavior.';
    }
}

// New interface, which will be used by the client
class NewInterface {
    request() {
        return 'NewInterface: General behavior.';
    }
}

// Adapter class
class Adapter extends NewInterface {
    constructor(oldInterface) {
        super();
        this.oldInterface = oldInterface;
    }

    request() {
        // Mapping between the new interface and the old one
        const result = this.oldInterface.specificRequest();
        return `Adapter: (TRANSLATED) ${result}`;
    }
}

// Usage
const oldInterface = new OldInterface();
const adapter = new Adapter(oldInterface);

console.log(adapter.request());  // Output: Adapter: (TRANSLATED) OldInterface: Specific behavior.
