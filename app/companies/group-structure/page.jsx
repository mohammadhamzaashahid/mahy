import GroupStructure from '@/components/UI/companies/GroupStructure'
import SubPageHeading from '@/components/UI/SubPageHeading'

export const metadata = {
  title: "Group Structure",
  description:
    "An overview of MAHY Khoory Group's corporate structure, encompassing 25 operating companies and business divisions across 10 industries.",
  alternates: { canonical: "/companies/group-structure" },
};

function GroupStructurePage() {
    return (
        <main>

              <SubPageHeading
                  fullHeight
                    title={"MAHY KHOORY GROUP"}
                    image={
                    //   "/assets/shared/holding-overview-page.jpg_norjia.jpg"
            "/assets/companies/group-structure/urban-jewel-tones-sunrise-paints-glass-facades.jpg_h5bjgi.jpg"
                }
                  />
            <GroupStructure />
        </main>
    )
}

export default GroupStructurePage