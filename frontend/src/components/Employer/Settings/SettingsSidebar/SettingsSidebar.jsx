import "./Settings.css";

import { NavLink } from "react-router-dom";

import settingCategories from "./settingCategories";
import settingIcons from "./icons";
import { settingTabs } from "./constants";

function SettingsSidebar() {

    const getLabel = (id) => {

        const item = settingTabs.find(

            tab => tab.id === id

        );

        return item?.label || id;

    };

    return (

        <aside className="settings-sidebar">

            {

                settingCategories.map(category => (

                    <div

                        key={category.title}

                        className="settings-category"

                    >

                        <h4>

                            {category.title}

                        </h4>

                        {

                            category.items.map(id => {

                                const Icon =

                                    settingIcons[id];

                                return (

                                    <NavLink

                                        key={id}

                                        to={`/settings/${id}`}

                                        className={({ isActive }) =>

                                            isActive

                                                ?

                                                "settings-link active"

                                                :

                                                "settings-link"

                                        }

                                    >

                                        <Icon />

                                        <span>

                                            {

                                                getLabel(id)

                                            }

                                        </span>

                                    </NavLink>

                                );

                            })

                        }

                    </div>

                ))

            }

        </aside>

    );

}

export default SettingsSidebar;