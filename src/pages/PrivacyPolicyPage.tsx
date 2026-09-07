import { useNavigate } from "react-router-dom";
import levoriaLogo from "@/assets/levoria-logo.png";

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="section-container flex items-center h-16 lg:h-20">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <img src={levoriaLogo} alt="Levoria" className="h-8 lg:h-10 w-auto" />
          </button>
        </div>
      </header>

      <div className="section-container max-w-3xl py-16 lg:py-24">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
          Last updated: July 2026
        </p>

        <div className="bg-secondary/50 border border-border rounded-lg p-5 mb-8">
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            <strong className="text-foreground">Short version:</strong> We only collect the data
            you actively provide to us (e.g. name and email when you request early access). We
            use one strictly necessary session cookie for authentication. We do not run any
            third-party analytics or advertising trackers.
          </p>
        </div>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">1. Controller</h2>
            <p className="mb-2">
              The controller responsible for the processing of your personal data is:
            </p>
            <p>
              <strong className="text-foreground">Levoria FlexCo</strong>
              <br />
              Schanzstraße 44/20, 1150 Wien, Österreich
              <br />
              E-Mail:{" "}
              <a href="mailto:legal@levoria.ai" className="text-primary hover:underline">
                legal@levoria.ai
              </a>
              <br />
              Website:{" "}
              <a
                href="https://www.levoria.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.levoria.ai
              </a>
            </p>
            <p className="mt-2">
              Levoria is the company behind this site's products, starting with{" "}
              <strong className="text-foreground">Alignum</strong>, our AI assistant for
              hairdressers, available at{" "}
              <a
                href="https://alignum.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                alignum.app
              </a>
              . This policy covers data collected through levoria.ai and through Alignum.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              2. Data we collect and why
            </h2>

            <h3 className="font-medium text-foreground mt-5 mb-2">
              a) Early access / lead inquiry
            </h3>
            <p className="mb-2">
              When you select a business type and submit your details to request early access,
              we collect your <strong className="text-foreground">name</strong>,{" "}
              <strong className="text-foreground">email address</strong>, and the{" "}
              <strong className="text-foreground">business type</strong> you selected. We use
              this information solely to contact you about Alignum and to schedule an
              onboarding.
            </p>
            <p>Legal basis: Art. 6(1)(a) GDPR — your consent at the time of submission.</p>

            <h3 className="font-medium text-foreground mt-5 mb-2">b) User account</h3>
            <p className="mb-2">
              If you create an account, we store your{" "}
              <strong className="text-foreground">username</strong>,{" "}
              <strong className="text-foreground">email address</strong>, and a{" "}
              <strong className="text-foreground">bcrypt-hashed password</strong> (we never store
              your password in plain text). This data is used to authenticate you and provide
              access to Alignum.
            </p>
            <p>Legal basis: Art. 6(1)(b) GDPR — performance of a contract.</p>

            <h3 className="font-medium text-foreground mt-5 mb-2">c) Server logs</h3>
            <p className="mb-2">
              Our hosting provider automatically records standard server log data: IP address,
              browser type, referring URL, date and time of request, and HTTP status code. These
              logs are used for security monitoring and are retained for up to 30 days.
            </p>
            <p>
              Legal basis: Art. 6(1)(f) GDPR — our legitimate interest in the security and
              operation of the service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">3. Cookies</h2>
            <p className="mb-4">
              We use only one cookie, which is strictly necessary for the application to
              function:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="text-left px-3.5 py-2.5 bg-secondary font-semibold text-foreground border-b border-border">
                      Name
                    </th>
                    <th className="text-left px-3.5 py-2.5 bg-secondary font-semibold text-foreground border-b border-border">
                      Purpose
                    </th>
                    <th className="text-left px-3.5 py-2.5 bg-secondary font-semibold text-foreground border-b border-border">
                      Duration
                    </th>
                    <th className="text-left px-3.5 py-2.5 bg-secondary font-semibold text-foreground border-b border-border">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3.5 py-2.5 border-b border-border align-top">
                      <code>session</code>
                    </td>
                    <td className="px-3.5 py-2.5 border-b border-border align-top">
                      Keeps you logged in between page loads
                    </td>
                    <td className="px-3.5 py-2.5 border-b border-border align-top">
                      Until you log out or close your browser
                    </td>
                    <td className="px-3.5 py-2.5 border-b border-border align-top">
                      Strictly necessary (HttpOnly, SameSite=Lax)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              We do not use advertising cookies, tracking pixels, or third-party analytics (such
              as Google Analytics). The only external resource loaded on our pages is the Font
              Awesome icon library served via Cloudflare's CDN, which may log your IP address as
              part of standard CDN operation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              4. Data sharing and transfers
            </h2>
            <p>
              We do not sell, rent, or share your personal data with third parties for marketing
              purposes. Your data is stored on servers within the European Economic Area. We do
              not transfer personal data to countries outside the EEA.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">5. Retention</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-foreground">Lead data</strong> (name, email, business
                type): retained until you request deletion or we determine it is no longer
                needed.
              </li>
              <li>
                <strong className="text-foreground">Account data</strong>: retained for the
                lifetime of your account. You may request deletion at any time.
              </li>
              <li>
                <strong className="text-foreground">Server logs</strong>: up to 30 days.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">6. Your rights (GDPR)</h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-4">
              <li>
                <strong className="text-foreground">Access</strong> the personal data we hold
                about you
              </li>
              <li>
                <strong className="text-foreground">Rectify</strong> inaccurate data
              </li>
              <li>
                <strong className="text-foreground">Erase</strong> your data ("right to be
                forgotten")
              </li>
              <li>
                <strong className="text-foreground">Restrict</strong> processing in certain
                circumstances
              </li>
              <li>
                <strong className="text-foreground">Data portability</strong> in a
                machine-readable format
              </li>
              <li>
                <strong className="text-foreground">Object</strong> to processing based on
                legitimate interests
              </li>
              <li>
                <strong className="text-foreground">Withdraw consent</strong> at any time (where
                processing is based on consent)
              </li>
            </ul>
            <p className="mb-2">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:legal@levoria.ai" className="text-primary hover:underline">
                legal@levoria.ai
              </a>
              .
            </p>
            <p>
              You also have the right to lodge a complaint with the Austrian data protection
              authority: <strong className="text-foreground">Datenschutzbehörde</strong>,
              Barichgasse 40–42, 1030 Wien,{" "}
              <a
                href="https://www.dsb.gv.at"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.dsb.gv.at
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              7. Changes to this policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Material changes will be
              communicated via email (if you have an account) or by posting a notice on this
              page. Continued use of the service after changes take effect constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">8. Contact</h2>
            <p>
              For any privacy-related questions or requests:{" "}
              <a href="mailto:legal@levoria.ai" className="text-primary hover:underline">
                legal@levoria.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
