import { useState, Fragment } from "react";
import type { KeyboardEvent, PropsWithChildren } from "react";
import { Dialog, Transition } from "@headlessui/react";

export const TermsAndConditions = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      openModal();
    }
  }

  return (
    <>
      <span
        tabIndex={0}
        className="cursor-pointer rounded font-semibold"
        onClick={openModal}
        onKeyDown={handleKeyDown}
      >
        <span className="text-gold">Nutzungsbedingungen</span>
      </span>

      {/* DIALOG */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="text-accent heading-small sm:heading-normal">
                    Nutzungs&shy;bedingungen
                  </Dialog.Title>
                  <div className="mt-4 max-h-96 space-y-4 overflow-y-scroll text-base-700">
                    <Section title="Zweck der Nutzung">
                      Das kostenfreie WLAN des Vereins steht ausschließlich für
                      private und nicht-kommerzielle Zwecke zur Verfügung.
                      Jegliche kommerzielle Nutzung ist strengstens untersagt.
                    </Section>
                    <Section title="Verantwortungsvoller Gebrauch">
                      Die Nutzung des WLANs sollte verantwortungsvoll und im
                      Einklang mit allen geltenden Gesetzen und Vorschriften
                      erfolgen. Illegale Aktivitäten sind strengstens untersagt.
                    </Section>
                    <Section title="Einschränkungen der Bandbreite">
                      Um eine faire Nutzung für alle Benutzer zu gewährleisten,
                      behält sich der Verein das Recht vor, die Bandbreite
                      individuell zu begrenzen.
                    </Section>
                    <Section title="Sicherheit">
                      Der Benutzer ist allein für die Sicherheit seines Geräts
                      und seiner Daten verantwortlich. Es wird empfohlen, eine
                      geeignete Sicherheitssoftware zu verwenden und keine
                      sensiblen Informationen über das WLAN zu übertragen.
                    </Section>
                    <Section title="Inhalte">
                      Der Zugriff auf illegale, unethische oder anstößige
                      Inhalte ist untersagt. Der Tanzverein behält sich das
                      Recht vor, den Zugriff auf bestimmte Websites oder Inhalte
                      zu beschränken.
                    </Section>
                    <Section title="Protokollierung und Überwachung">
                      Der Tanzverein behält sich das Recht vor, die Nutzung des
                      WLANs zu protokollieren und zu überwachen, um die
                      Einhaltung dieser Nutzungsbedingungen sicherzustellen.
                    </Section>
                    <Section title="Beendigung">
                      Der Tanzverein kann die WLAN-Nutzung ohne vorherige
                      Ankündigung beenden oder einschränken, wenn gegen diese
                      Nutzungsbedingungen verstoßen wird.
                    </Section>
                    <Section title="Änderung der Nutzungsbedingungen">
                      Der Tanzverein behält sich das Recht vor, diese
                      Nutzungsbedingungen jederzeit zu ändern. Es liegt in der
                      Verantwortung des Benutzers, regelmäßig nach
                      Aktualisierungen zu suchen.
                    </Section>
                    <Section title="Zustimmung">
                      Die Nutzung des kostenfreien WLANs im Tanzverein setzt die
                      uneingeschränkte Zustimmung zu diesen Nutzungsbedingungen
                      voraus.
                    </Section>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="text-accent text-normal rounded-md border border-transparent bg-secondary-100 px-4 py-2 font-medium transition-colors hover:bg-secondary-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Schließen
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const Section = ({ title, children }: PropsWithChildren<{ title: string }>) => (
  <section className="space-y-2">
    <h2 className="text-accent heading-extrasmall">{title}</h2>
    <p>{children}</p>
  </section>
);
