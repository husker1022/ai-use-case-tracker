const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbweCnoRiV6KfhS6Gf1wm3WexVNuwyCwO_bjIUTt28nP9W02Te7zoJQTMldUXjRoM49G/exec';

export default async function handler(req, res) {
    const params = new URLSearchParams(req.query);

    try {
        const response = await fetch(`${APPS_SCRIPT_URL}?${params}`);
        const data = await response.json();
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
