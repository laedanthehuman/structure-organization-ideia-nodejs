module.exports = app => {
    app.get('/', (req, res) => res.json({ status: "Agenda is on the air \\o/" }));
};