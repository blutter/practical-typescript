/// <reference path="vendingMachine.ts" />
/// <reference path="../node_modules/@types/knockout/index.d.ts" />

var machine = new VendingMachine();
ko.applyBindings(machine);
