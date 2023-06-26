import {
    janeAMSkincare,
    janePMSkincare,
    johnAMSkincare,
  } from "../routines.js";
  
  describe("Skincare Routines", () => {
    test("Jane's AM Skincare Routine should have 5 steps", () => {
      expect(janeAMSkincare).toHaveLength(5);
    });
  
    test("John's PM Skincare Routine should have 6 steps", () => {
      expect(janePMSkincare).toHaveLength(6);
    });
  
    test("John's AM Skincare Routine should have 5 steps", () => {
      expect(johnAMSkincare).toHaveLength(5);
    });
  });
  