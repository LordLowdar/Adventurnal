import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CHARACTER } from "../utils/mutations";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

const Characters = () => {
  const [characterInfo, setcharinfo] = useState({
    name: "Aname",
    race: "Dwarf",
    className: "Ranger",
  });
  const [addCharacter, { error, data, loading }] = useMutation(ADD_CHARACTER);
  const onChange = (e) =>
     setcharinfo({ ...characterInfo, [e.target.name]: e.target.value});

  const creation = async () => {
    const { name, race, className } = characterInfo;
    const { data } = await addCharacter({
      variables: {
        name,
        race,
        className,
      },
    });
    console.log("created yo");
    console.log(data);
  };
  return (
    <div className="base">
      <h1>Create a Character</h1>
      <h2>{characterInfo.name}</h2>
      <h2>{characterInfo.race}</h2>
      <img src = {"./characterImages/races/" + characterInfo.race + ".PNG"}></img>
      <img src = {"./characterImages/classes/" + characterInfo.className + ".PNG"}></img>
      <h2>{characterInfo.className}</h2>
      <div className="characterCreation">
        <input
          onChange={onChange}
          type="text"
          name="name"
          value={characterInfo.name}
        />
        <select onChange={onChange} name="race" value={characterInfo.race}>
          <option value="Dragonborn">Dragonborn</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Elf">Elf</option>
          <option value="Gnome">Gnome</option>
          <option value="Half Elf">Half Elf</option>
          <option value="Halfling">Halfling</option>
          <option value="Half Orc">Half Orc</option>
          <option value="Human">Human</option>
          <option value="Tiefling">Tiefling</option>
        </select>
        <select
          onChange={onChange}
          name="className"
          value={characterInfo.className}
        >
          <option value="Barbarian">Barbarian</option>
          <option value="Bard">Bard</option>
          <option value="Cleric">Cleric</option>
          <option value="Druid">Druid</option>
          <option value="Fighter">Fighter</option>
          <option value="Monk">Monk</option>
          <option value="Paladin">Paladin</option>
          <option value="Ranger">Ranger</option>
          <option value="Rogue">Rogue</option>
          <option value="Sorcerer">Sorcerer</option>
          <option value="Warlock">Warlock</option>
          <option value="Wizard">Wizard</option>
        </select>

        <button type="submit" onClick={creation} className="btn">
          Create Character
        </button>
      </div>
    </div>
  );
};

export default Characters;
