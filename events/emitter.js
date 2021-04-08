function Emitter() {
    this.events = {}
}

Emitter.prototype.on = function (type, listner) {
    this.events[type] = this.events[type] || []
    this.events[type].push(listner)
}

Emitter.prototype.emit = function (type) {
    if (this.events[type]) {
        this.events[type].forEach(function (listner) {
            listner()
        });
    }
}

module.exports = Emitter;