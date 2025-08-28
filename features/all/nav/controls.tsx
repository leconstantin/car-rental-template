import { LayoutGridIcon } from 'lucide-react';
import { FaListUl } from 'react-icons/fa6';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import SortCategories from './sort';
export default function ControlsCategories() {
  return (
    <div className="flex items-center gap-5 px-2">
      <SortCategories />
      <div className="flex items-center gap-2">
        <LayoutGridIcon className="size-4 cursor-pointer text-foreground transition-all duration-300 hover:text-muted-foreground" />
        <FaListUl className="size-4 cursor-pointer text-muted-foreground transition-all duration-300 hover:text-foreground" />
      </div>
      <div className="flex items-center space-x-2">
        <Switch className="cursor-pointer" id="airplane-mode" />
        <Label
          className="text-nowrap text-muted-foreground text-sm"
          htmlFor="airplane-mode"
        >
          In Usd
        </Label>
      </div>
    </div>
  );
}
