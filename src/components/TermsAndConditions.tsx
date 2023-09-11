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
                  <div className="mt-2">
                    {/* TODO: real text */}
                    <p className="text-normal text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aliquam amet dignissimos dolorum, earum eius ex ipsa iusto
                      molestiae molestias, odit omnis quas suscipit tempore
                      ullam.
                    </p>
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
