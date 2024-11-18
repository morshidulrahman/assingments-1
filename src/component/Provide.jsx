import providePic from "../assets/provide.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { FaCircleCheck } from "react-icons/fa6";
// Custom css
import "./Provide.css";

export default function Provide() {
  return (
    <div className="grid grid-cols-1 px-4 md:grid-cols-2 gap-12  container mx-auto my-32">
      <div>
        <h1 className="text-[40px] font-bold left-[48px] mb-12">
          We provide...
        </h1>
        <div>
          <Accordion preExpanded={["a"]}>
            <AccordionItem className="mb-[34px]">
              <AccordionItemHeading>
                <AccordionItemState>
                  {({ expanded }) => (
                    <AccordionItemButton
                      className={`flex items-center gap-8 text-[20px] font-medium leading-7  ${
                        expanded ? "text-black" : "text-[#00000099]"
                      }`}
                    >
                      <FaCircleCheck
                        className={`text-[24px] ${
                          expanded ? "text-[#9998E1]" : "text-[#00000099]"
                        }`}
                      />
                      Personalized routine
                    </AccordionItemButton>
                  )}
                </AccordionItemState>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-[#000000b3] pl-9 text-[13px] leading-5 font-normal">
                  We offer access to a variety of additional resources to
                  enhance your experience, including exclusive tools, guides,
                  and support materials designed to help you achieve your goals
                  more effectively.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            {/*  */}
            <AccordionItem className="mb-[34px]">
              <AccordionItemHeading>
                <AccordionItemState>
                  {({ expanded }) => (
                    <AccordionItemButton
                      className={`flex items-center gap-8 text-[20px] font-medium leading-7  ${
                        expanded ? "text-black" : "text-[#00000099]"
                      }`}
                    >
                      <FaCircleCheck
                        className={`text-[24px] ${
                          expanded ? "text-[#9998E1]" : "text-[#00000099]"
                        }`}
                      />
                      Follow-up after completing courses
                    </AccordionItemButton>
                  )}
                </AccordionItemState>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-[#000000b3] pl-9 text-[13px] leading-5 font-normal">
                  We offer access to a variety of additional resources to
                  enhance your experience, including exclusive tools, guides,
                  and support materials designed to help you achieve your goals
                  more effectively.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={"a"} className="mb-[34px]">
              <AccordionItemHeading>
                <AccordionItemState>
                  {({ expanded }) => (
                    <AccordionItemButton
                      className={`flex items-center gap-8 text-[20px] font-medium leading-7  ${
                        expanded ? "text-black" : "text-[#00000099]"
                      }`}
                    >
                      <FaCircleCheck
                        className={`text-[24px] ${
                          expanded ? "text-[#9998E1]" : "text-[#00000099]"
                        }`}
                      />
                      Access to additional resources
                    </AccordionItemButton>
                  )}
                </AccordionItemState>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-[#000000b3] pl-9 text-[13px] leading-5 font-normal">
                  We offer access to a variety of additional resources to
                  enhance your experience, including exclusive tools, guides,
                  and support materials designed to help you achieve your goals
                  more effectively.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="mb-[48px]">
              <AccordionItemHeading>
                <AccordionItemState>
                  {({ expanded }) => (
                    <AccordionItemButton
                      className={`flex items-center gap-8 text-[20px] font-medium leading-7  ${
                        expanded ? "text-black" : "text-[#00000099]"
                      }`}
                    >
                      <FaCircleCheck
                        className={`text-[24px] ${
                          expanded ? "text-[#9998E1]" : "text-[#00000099]"
                        }`}
                      />
                      Free community support
                    </AccordionItemButton>
                  )}
                </AccordionItemState>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-[#000000b3] pl-9 text-[13px] leading-5 font-normal">
                  We offer access to a variety of additional resources to
                  enhance your experience, including exclusive tools, guides,
                  and support materials designed to help you achieve your goals
                  more effectively.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <button className="py-4 hover:bg-primaryColor hover:text-white duration-300 px-6 border-2 border-primaryColor text-primaryColor text-[14px] font-semibold rounded-full">
          Learn More About Our Services
        </button>
      </div>
      <div
        className="min-h-[760px] provide_img relative flex items-end bg-no-repeat p-2 rounded-[18px] bg-cover"
        style={{ backgroundImage: `url(${providePic})` }}
      ></div>
    </div>
  );
}
