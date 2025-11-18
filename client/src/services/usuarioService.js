const API = "http://localhost:8080/usuarios";

export async function obtenerUsuarios() {
    const response = await fetch(API);
    return await response.json();
}

export async function crearUsuario(usuario) {
  const resp = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  return resp.json();
}

export async function actualizarUsuario(id, usuario) {
  const resp = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  return resp.json();
}

export async function eliminarUsuario(id) {
  return fetch(`${API}/${id}`, { method: "DELETE" });
}
