import type {
  ContactDeliveryService,
  ContactSubmission,
} from "@/types/contact";

class NotConfiguredContactService implements ContactDeliveryService {
  async deliver(_submission: ContactSubmission) {
    void _submission;
    return {
      status: "not_configured" as const,
      message:
        "El canal de correo todavía no está configurado. Tu mensaje no fue enviado. Usa el enlace de Google Maps o vuelve a intentarlo cuando el museo confirme sus canales oficiales.",
    };
  }
}

export const contactDeliveryService: ContactDeliveryService =
  new NotConfiguredContactService();
