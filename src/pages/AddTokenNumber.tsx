import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import SCButton from "@/components/component/SCButton";
import TNTable from "@/components/component/TNTable";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TailwindModal from "@/components/component/SCAddModal";
import { Button } from "@/components/ui/button";

const AddTokenNumber = () => {
  return (
    <div className="mt-8 mb-10 ml-16 flex">
      <div className="page-container space-y-5">
        <div className="flex">
          <div className="basis-full">
            <Button className="h-12 w-full">Add Token Number</Button>
          </div>
          <div className="basis-full">
            <Button className="h-12 w-full">Add Bulk Token Number</Button>
          </div>
        </div>
        <div>
          <h2 className="scroll-m-20 text-2xl font-bold tracking-tight first:mt-0">
            Add Token Number
          </h2>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-end justify-start gap-5">
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label className="text-md font-bold" htmlFor="tan">
                TAN
              </Label>
              <Input type="tan" id="tan" placeholder="TAN" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label className="text-md font-bold" htmlFor="name">
                Quarter
              </Label>
              <Input type="name" id="name" placeholder="Select Quarter" />
            </div>
            <SCButton
              id="search"
              btnName="Search"
              btnAlt="Search Button"
              imgSrc="/gificons/Search.gif"
            />
            <TailwindModal />
            <SCButton
              id="exportExcel"
              btnName="Export to Excel"
              btnAlt="Export to Excel Button"
              imgSrc="/gificons/Excelfile.gif"
            />
          </div>
          <div className="flex items-center justify-start gap-5">
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label className="text-md font-bold" htmlFor="pan">
                Financial Year
              </Label>
              <Input type="pan" id="pan" placeholder="Select Financial Year" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label className="text-md font-bold" htmlFor="email">
                Form
              </Label>
              <Input type="email" id="email" placeholder="Select Form" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label className="text-md font-bold" htmlFor="branch">
                Return Type
              </Label>
              <Input
                type="branch"
                id="branch"
                placeholder="Select Return Type"
              />
            </div>
          </div>
        </div>
        <div>
          <TNTable />
        </div>
        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default AddTokenNumber;
