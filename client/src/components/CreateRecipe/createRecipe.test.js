import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CreateRecipe } from "./createRecipe";
import configureStore from "redux-mock-store";
import AddTodoDefault, { AddTodo } from "./AddTodo.js";

configure({ adapter: new Adapter() });

describe("<CreateRecipe />", () => {
  describe("Estructura", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<CreateRecipe />);
    });
    it("Renderiza un <form>", () => {
      expect(wrapper.find("form")).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Name"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(0).text()).toEqual("Name");
    });

    it('Renderiza un input con la propiedad "name" igual a "name"', () => {
      expect(wrapper.find('input[name="name"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Resume"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(1).text()).toEqual("Resume");
    });

    it('Renderiza una textarea con la propiedad "name" igual a "description"', () => {
      expect(wrapper.find('textarea[name="resume"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Image"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(2).text()).toEqual("Image");
    });

    it('Renderiza un input con la propiedad "name" igual a "img"', () => {
      expect(wrapper.find('input[name="img"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Score"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("Score");
    });

    it('Renderiza un input con la propiedad "name" igual a "score"', () => {
      expect(wrapper.find('input[name="score"]')).toHaveLength(1);
    });
  });
});
