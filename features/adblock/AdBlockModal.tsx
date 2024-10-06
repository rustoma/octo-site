"use client";

import React, { useState } from "react";
import { useDetectAdBlock } from "adblock-detect-react";

import Modal from "@/components/modal/Modal";
import { useDictionary } from "@/context/DictionaryContext";

import "./adblockModal.style.scss";

export const AdBlockModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const adBlockDetected = useDetectAdBlock();
  const { t } = useDictionary();

  React.useEffect(() => {
    if (adBlockDetected) {
      setIsModalOpen(true);
    }
  }, [adBlockDetected]);

  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <button className="adblock-modal-close" onClick={() => setIsModalOpen(false)}>
        &times;
      </button>
      <div className="adblock-modal-content-wrapper">
        <div className="adblock-modal-content">
          <div className="adblock-modal-image-container-wrapper">
            <div className="adblock-modal-image-container">
              <div className="adblock-modal-image">
                <h3 className="adblock-modal-image-title">Ads</h3>
              </div>
            </div>
          </div>
          <div className="adblock-modal-text">
            <h3 className="adblock-modal-title">{t.adBlock.title}</h3>
            <p className="adblock-modal-body">{t.adBlock.description}</p>
          </div>
          <button className="adblock-modal-button" onClick={() => setIsModalOpen(false)}>
            OK
          </button>
        </div>
      </div>
    </Modal>
  );
};
