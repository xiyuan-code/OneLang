class TestClass {
    getResult(): number {
        let mapObj = { x: 5 };
        //let containsX = "x" in mapObj;
        //delete mapObj["x"];
        mapObj["x"] = 3;
        return mapObj["x"];
        //const xVal = mapObj["x"];
        //return containsX
    }

    testMethod() {
        console.log(`Result = ${this.getResult()}`);
    }
}
