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
import SCTable from "@/components/component/SCTable";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TailwindModal from "@/components/component/SCAddModal";

const ProcessDetail = () => {
  return (
    <div className="mt-8 mb-10 ml-16 flex">
      <div className="page-container space-y-5">
        <div>
          <h2 className="scroll-m-20 text-2xl font-bold tracking-tight first:mt-0">
            Process Detail
          </h2>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-end justify-start gap-5">
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label className="text-md font-bold" htmlFor="name">
                Name
              </Label>
              <Input type="name" id="name" placeholder="Name" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label className="text-md font-bold" htmlFor="tan">
                TAN
              </Label>
              <Input type="tan" id="tan" placeholder="TAN" />
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
                PAN
              </Label>
              <Input type="pan" id="pan" placeholder="PAN" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label className="text-md font-bold" htmlFor="email">
                Email
              </Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label className="text-md font-bold" htmlFor="branch">
                Branch
              </Label>
              <Input type="branch" id="branch" placeholder="Branch" />
            </div>
          </div>
        </div>
        <div>
          <SCTable />
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

export default ProcessDetail;
