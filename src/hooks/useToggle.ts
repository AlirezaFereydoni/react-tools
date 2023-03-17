import { useState } from 'react';

const useToggle = (initial: boolean) => {
    const [isOpen, setOpen] = useState(initial);

    return { isOpen, setOpen };
};

export default useToggle;
