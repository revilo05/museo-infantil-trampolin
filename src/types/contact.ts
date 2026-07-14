export type ContactSubmission = {
  name: string;
  email: string;
  reason: string;
  message: string;
};

export type ContactDeliveryResult =
  | { status: "success"; message: string }
  | { status: "error"; message: string }
  | { status: "not_configured"; message: string };

export type ContactFormState = ContactDeliveryResult & {
  fieldErrors?: Partial<Record<keyof ContactSubmission, string>>;
  values?: Partial<ContactSubmission>;
};

export interface ContactDeliveryService {
  deliver(submission: ContactSubmission): Promise<ContactDeliveryResult>;
}
