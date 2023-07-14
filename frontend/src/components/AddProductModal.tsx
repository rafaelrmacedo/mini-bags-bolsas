import React from "react";

interface AddProductModalProps {
  isOpen: boolean;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ isOpen }) => {
  if (isOpen) {
      <div>
          modal
      </div>
  }

  return (
    <div>
      
    </div>
  );
};

export default AddProductModal;
