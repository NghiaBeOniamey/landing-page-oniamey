import {
    LogoIconBig1,
    LogoIconBig2,
    LogoIconBig3,
} from "@/components/Icons.tsx";

interface SponsorProps {
    icon: JSX.Element;
    name: string;
}

const sponsors: SponsorProps[] = [
    {
        icon: <LogoIconBig1/>,
        name: "Sponsor 1",
    },
    {
        icon: <LogoIconBig2/>,
        name: "Sponsor 2",
    },
    {
        icon: <LogoIconBig3/>,
        name: "Sponsor 3",
    },
    {
        icon: <LogoIconBig1/>,
        name: "Sponsor 4",
    },
    {
        icon: <LogoIconBig2/>,
        name: "Sponsor 5",
    },
    {
        icon: <LogoIconBig3/>,
        name: "Sponsor 6",
    },
];

export const Sponsors = () => {
    return (
        <section
            id="sponsors"
            className="container pt-24 sm:py-32"
        >
            <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
                Investors and founders
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                {sponsors.map(({icon, name}: SponsorProps) => (
                    <div
                        key={name}
                        className="flex items-center gap-1 text-muted-foreground/60"
                    >
                        <span>{icon}</span>
                        <h3 className="text-xl  font-bold">{name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};
