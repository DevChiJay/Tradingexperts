import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {
  Banknote,
  CalendarSync,
  ChartCandlestick,
  Headphones,
  History,
  LockKeyholeIcon,
  Menu,
  Settings,
  User,
  UsersRound
} from "lucide-react";

import Link from "next/link";

const DashboardAccountDetails = () => {
  return (
    <div>
      <div className="flex items-center gap-4 uppercase text-sm">
        <Link href={"/dashboard"} className="flex-center">
          <ChartCandlestick className="size-4" />
          Trading
        </Link>
        <div className="">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex-center">
                  <Banknote />
                  Account
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-40">
                  <NavigationMenuLink>
                    <div className="w-[200px] p-5 space-y-2">
                      <Link
                        href={"/dashboard/funds?deposit=true"}
                        className="flex items-center capitalize text-sm"
                      >
                        <Banknote className="mr-1" />
                        Deposite funds
                      </Link>

                      <Link
                        href={"/dashboard/funds?withdrawal=true"}
                        className="flex items-center capitalize text-sm"
                      >
                        <Banknote className="mr-1" />
                        withdraw funds
                      </Link>
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex-center">
                  <Settings className="size-4" />
                  Settings
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-40">
                  <NavigationMenuLink>
                    <div className="w-[200px] p-5 space-y-2">
                      <Link
                        href={"/dashboard/settings?personal-data=true"}
                        className="flex items-center capitalize text-sm"
                      >
                        <User className="mr-1 size-4" />
                        Personal Data
                      </Link>

                      <Link
                        href={"/dashboard/settings?security=true"}
                        className="flex items-center capitalize text-sm"
                      >
                        <LockKeyholeIcon className="mr-1 size-4" />
                        Security Settings
                      </Link>
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex-center">
                  <Menu className="size-4" />
                  Statements
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-40">
                  <NavigationMenuLink>
                    <div className="w-[200px] p-5 space-y-2">
                      <Link
                        href={"/dashboard/history?transactions=true"}
                        className="flex items-center capitalize text-sm"
                      >
                        <CalendarSync className="mr-1 size-4" />
                        Transaction History
                      </Link>

                      <Link
                        href={"/dashboard/history?trade=true"}
                        className="flex items-center capitalize text-sm"
                      >
                        <History className="mr-1 size-4" />
                        Trading history
                      </Link>
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Link href={"/dashboard/referral"} className="flex-center">
          <UsersRound className="size-4" />
          My referrals
        </Link>
        <Link href={"/dashboard/contact"} className="flex-center">
          <Headphones className="size-4" />
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default DashboardAccountDetails;
