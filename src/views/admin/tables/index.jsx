import CheckTable from "./components/CheckTable";

import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "./variables/columnsData";
import tableDataDevelopment from "./variables/tableDataDevelopment.json";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataColumns from "./variables/tableDataColumns.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import DevelopmentTable from "./components/DevelopmentTable";
import ColumnsTable from "./components/ColumnsTable";
import ComplexTable from "./components/ComplexTable";
import AppEle from "components/AppContainer/AppEle";

const Tables = () => {
  return (
    <div className="pt-8 grid gap-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <DevelopmentTable
          columnsData={columnsDataDevelopment}
          tableData={tableDataDevelopment}
        />
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
      </div>

      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        />

        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </div> */}
      <AppEle icon='https://app.bot9.ai/dist/img/slack.svg' title="Slack" desc="Streamline workflows, and enhance team collaboration" />
      <AppEle icon='https://app.bot9.ai/dist/img/discord-icon.svg' title="Discord" desc="Answer all your discord messages on autopilot, without the help of live agents." />
      <AppEle icon='https://app.bot9.ai/dist/img/intercom.svg' title="Intercom" desc="Turn visitors into customers with a live AI powered chat widget." />
      <AppEle icon='https://app.bot9.ai/dist/img/freshdesk.png' title="Freshdesk" desc="Hands-free resolution for all your freshdesk queries." />
      <AppEle icon='https://app.bot9.ai/dist/img/zapier.svg' title="Zapier" desc="5000+ integrations. build automated workflows customized for you." />
    </div>
  );
};

export default Tables;
