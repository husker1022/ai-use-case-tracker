const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbweCnoRiV6KfhS6Gf1wm3WexVNuwyCwO_bjIUTt28nP9W02Te7zoJQTMldUXjRoM49G/exec';

module.exports = async function handler(req, res) {
    const params = new URLSearchParams(req.query);

    try {
        const response = await fetch(`${APPS_SCRIPT_URL}?${params}`, {
            redirect: 'follow'
        });
        const text = await response.text();
        try {
            const data = JSON.parse(text);
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(data);
        } catch (e) {
            res.status(500).json({ error: 'Non-JSON response from Apps Script', preview: text.substring(0, 500) });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
