import { useState } from 'react';

// Tạo hook useModals
const useModals = () => {
  // Sử dụng kiểu Record<string, boolean> để xác định trạng thái của các modal
  const [modals, setModals] = useState<Record<string, boolean>>({});

  // Hàm để hiển thị modal
  const showModal = (key: string) => {
    setModals((prev) => ({ ...prev, [key]: true }));
  };

  // Hàm để đóng modal
  const hideModal = (key: string) => {
    setModals((prev) => ({ ...prev, [key]: false }));
  };

  // Hàm kiểm tra xem modal có hiển thị hay không
  const isVisible = (key: string): boolean => !!modals[key];

  return {
    showModal,
    hideModal,
    isVisible,
  };
};

export default useModals;
