export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function scrollToId(id) {
  const el = document.getElementById(String(id).replace("#", ""));
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function telHref(value) {
  return `tel:${value.replace(/[^\d+]/g, "")}`;
}

export function whatsappHref(number, message = "Hi Emprime, I'd like to discuss a project.") {
  return `https://wa.me/${number.replace(/[^\d]/g, "")}?text=${encodeURIComponent(message)}`;
}

export function formatPrice(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
