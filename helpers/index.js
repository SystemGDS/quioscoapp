export const formatearDinero = cantidad => {
    if (typeof window !== "undefined") {
      return cantidad.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } else {
      return cantidad; // Devuelve la cantidad sin formato durante la fase de compilación en Node.js
    }
}
