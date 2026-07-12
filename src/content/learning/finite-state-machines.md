---
title: Finite State Machines
description: Understanding FSMs for hardware design
group: FPGA Development
icon: "🔁"
---

## What is a Finite State Machine?

An FSM is a sequential circuit that transitions between a finite number of states based on inputs. It's the backbone of most FPGA designs.

## Moore vs Mealy

- **Moore**: Output depends only on current state
- **Mealy**: Output depends on state + inputs

## Verilog Example

```verilog
module fsm_example(
    input clk, rst, in,
    output reg out
);
    localparam IDLE = 2'b00, STATE1 = 2'b01, STATE2 = 2'b10;

    reg [1:0] state, next_state;

    always @(posedge clk or posedge rst) begin
        if (rst) state <= IDLE;
        else state <= next_state;
    end

    always @(*) begin
        case (state)
            IDLE:  next_state = in ? STATE1 : IDLE;
            STATE1: next_state = STATE2;
            STATE2: next_state = IDLE;
            default: next_state = IDLE;
        endcase
    end

    always @(posedge clk) out <= (state == STATE2);
endmodule
```
