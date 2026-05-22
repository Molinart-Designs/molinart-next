"use client";

import { contactContent } from "@/content/contact";
import type { Locale } from "@/content/i18n";

export function MolinartContactSection({ locale }: { locale: Locale }) {
  const content = contactContent[locale];

  return (
    <div className="container">
      <div className="row pb-5">
        <div className="col-12 col-md-7">
          <h3 className="main-font text-uppercase">
            <span className="text-yellow d-block text-uppercase">
              {content.heading.accent}
            </span>
            <span>{content.heading.title}</span>
          </h3>
          <p className="py-2 alt-font">{content.description}</p>
        </div>
        <div className="col-12 col-md-5 text-md-right pt-4 pt-md-0">
          <h2 className="m-0 text-yellow main-font font-weight-bold">
            {content.sidebar.title}
          </h2>
          <p className="alt-font">{content.sidebar.subtitle}</p>
        </div>
      </div>

      <form
        className="contact-form"
        id="contact-form-data"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="row pt-3">
          <div className="col-12">
            <div className="col-sm-12 px-0" id="result" />
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder={`${content.form.name} *`}
                id="name"
                name="name"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="tel"
                placeholder={content.form.phone}
                id="phone"
                name="phone"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder={`${content.form.email} *`}
                required
                id="email"
                name="email"
              />
            </div>
          </div>

          <div className="col-12 col-md-6 offset-md-1 contact-form">
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder={`${content.form.message} *`}
                id="message"
                name="message"
              />
            </div>
          </div>

          <div className="col-12 px-md-0">
            <div className="contact-btn pt-5 text-center text-lg-left">
              <p>{content.form.spamNotice}</p>
              <button
                type="button"
                className="btn btn-medium btn-rounded btn-yellow text-capitalize contact_btn"
                disabled
                title={content.form.disabledTitle}
              >
                {content.form.submit}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
