const API_BASE = 'https://renturn.vercel.app/'; // <-- غيّريه هنا

const API = {
  token: localStorage.getItem('api_token') || null,

  setToken(token) {
    this.token = token;
    localStorage.setItem('api_token', token);
  },

  async request(path, { method = 'GET', body = null, query = null } = {}) {
    const url = new URL(API_BASE + path);
    if (query) Object.entries(query).forEach(([k, v]) => url.searchParams.append(k, v));

    const headers = { 'Content-Type': 'application/json' };
    if (this.token) headers['Authorization'] = `Bearer ${this.token}`;

    const res = await fetch(url.toString(), {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const ct = res.headers.get('content-type') || '';
    const data = ct.includes('application/json') ? await res.json() : await res.text();

    if (!res.ok) {
      const err = new Error('API error');
      err.status = res.status;
      err.data = data;
      throw err;
    }
    return data;
  },

  // ====== Endpoints (عدّلي المسارات وحقول الـ body بحسب توثيق الـ API عندك) ======
  getCategories() { return this.request('/categories'); },
  createCategory(payload) { return this.request('/categories', { method: 'POST', body: payload }); },
  updateCategory(id, payload) { return this.request(`/categories/${id}`, { method: 'PUT', body: payload }); },
  deleteCategory(id) { return this.request(`/categories/${id}`, { method: 'DELETE' }); },
};

window.API = API;