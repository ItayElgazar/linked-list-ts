"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var item_1 = require("./item");
var LinkedList = (function () {
    function LinkedList() {
    }
    LinkedList.prototype.append = function (data) {
        if (!this.head) {
            this.head = new item_1.Item(data);
            return;
        }
        var current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = new item_1.Item(data);
    };
    LinkedList.prototype.remove = function (data) {
        var current = this.head;
        if (!current) {
            return false;
        }
        else if (this.head.data === data) {
            if (this.head.next) {
                this.head = this.head.next;
            }
            else {
                this.head = null;
            }
        }
        else {
            while (current.next !== null) {
                if (current.next.data === data) {
                    current.next = null;
                    return true;
                }
                current = current.next;
            }
            return false;
        }
    };
    LinkedList.prototype.get = function (data) {
        var current = this.head;
        if (!current) {
            return undefined;
        }
        else if (this.head.data === data) {
            return this.head;
        }
        while (current.next !== null) {
            if (current.next.data === data) {
                return current.next;
            }
            current = current.next;
        }
    };
    return LinkedList;
}());
