export const formatearDinero = cantidad => {
    return cantidad.toLocaleString("EN-US",{
        style: "currency",
        currency: "USD",
    })
}
