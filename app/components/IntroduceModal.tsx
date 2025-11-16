"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, IconButton, Modal } from "@/src/components/ui";
import { AssetIcon, AssetIconEnum, AssetImage, AssetImageEnum } from "@/src/components/common";

const IntroduceModal = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Modal open={open} onClose={handleClose} className={`max-w-[350px]`}>
      <div className="relative">
        <div className="flex justify-center relative">
          <AssetImage src={AssetImageEnum.INTRODUCE} alt="introduce" width={350} height={404} />
        </div>
        <div className="absolute top-dm-12 right-dm-12">
          <IconButton className="rounded-full" onClick={handleClose}>
            <AssetIcon src={AssetIconEnum.CLOSE} alt="close" width={16} height={16} />
          </IconButton>
        </div>

      </div>
      <div className="absolute flex justify-center items-center left-0 right-0 -bottom-dm-16">
        <Button onClick={handleClose}>{t("see_more")}</Button>
      </div>
    </Modal>
  )
}

export default IntroduceModal;
