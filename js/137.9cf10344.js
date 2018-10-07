(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{"./node_modules/code-example/lib/fcl.js":function(n,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});i.default="  FUNCTION_BLOCK Fuzzy_FB\n      VAR_INPUT\n          TimeDay : REAL; (* RANGE(0 .. 23) *)\n          ApplicateHost: REAL;\n          TimeConfiguration: REAL;\n          TimeRequirements: REAL;\n      END_VAR\n\n      VAR_OUTPUT\n          ProbabilityDistribution: REAL;\n          ProbabilityAccess: REAL;\n      END_VAR\n\n      FUZZIFY TimeDay\n          TERM inside := (0, 0) (8, 1) (22,0);\n          TERM outside := (0, 1) (8, 0) (22, 1);\n      END_FUZZIFY\n\n      FUZZIFY ApplicateHost\n          TERM few := (0, 1) (100, 0) (200, 0);\n          TERM many := (0, 0) (100, 0) (200, 1);\n      END_FUZZIFY\n\n      FUZZIFY TimeConfiguration\n          TERM recently := (0, 1) (30, 1) (120, 0);\n          TERM long := (0, 0) (30, 0) (120, 1);\n      END_FUZZIFY\n\n      FUZZIFY TimeRequirements\n          TERM recently := (0, 1) (30, 1) (365, 0);\n          TERM long := (0, 0) (30, 0) (365, 1);\n      END_FUZZIFY\n\n      DEFUZZIFY ProbabilityAccess\n          TERM hight := 1;\n          TERM medium := 0.5;\n          TERM low := 0;\n          ACCU: MAX;\n          METHOD: COGS;\n          DEFAULT := 0;\n      END_DEFUZZIFY\n\n      DEFUZZIFY ProbabilityDistribution\n          TERM hight := 1;\n          TERM medium := 0.5;\n          TERM low := 0;\n          ACCU: MAX;\n          METHOD: COGS;\n          DEFAULT := 0;\n      END_DEFUZZIFY\n\n      RULEBLOCK No1\n          AND : MIN;\n          RULE 1 : IF TimeDay IS outside AND ApplicateHost IS few THEN ProbabilityAccess IS hight;\n          RULE 2 : IF ApplicateHost IS many THEN ProbabilityAccess IS hight;\n          RULE 3 : IF TimeDay IS inside AND ApplicateHost IS few THEN ProbabilityAccess IS low;\n      END_RULEBLOCK\n\n      RULEBLOCK No2\n          AND : MIN;\n          RULE 1 : IF ApplicateHost IS many THEN ProbabilityDistribution IS hight;\n      END_RULEBLOCK\n\n  END_FUNCTION_BLOCK\n\n"}}]);