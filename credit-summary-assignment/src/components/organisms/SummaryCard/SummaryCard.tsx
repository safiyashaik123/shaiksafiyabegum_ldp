import { Card, Stack } from "@mui/material";
import { useState } from "react";

import CardTitle from "../../atoms/CardTitle/CardTitle";
import DividerLine from "../../atoms/DividerLine/DividerLine";
import CustomButton from "../../atoms/CustomButton/CustomButton";

import SummaryRow from "../../molecules/SummaryRow/SummaryRow";
import SliderSection from "../../molecules/SliderSection/SliderSection";
import AmountInfo from "../../molecules/AmountInfo/AmountInfo";
import PaymentRow from "../../molecules/PaymentRow/PaymentRow";
import RateRow from "../../molecules/RateRow/RateRow";

function SummaryCard() {

  // Slider value (0 - 100)
  const [sliderValue, setSliderValue] = useState(0);

  const MAX_AMOUNT = 880000;
  const RATE_PERCENTAGE = 12;

  // Calculated values
  const selectedAmount = Math.round(
    (sliderValue / 100) * MAX_AMOUNT
  );

  const payBackAmount = Math.round(
    selectedAmount + selectedAmount * 0.016
  );

  const rateAmount = Math.round(
    selectedAmount * (RATE_PERCENTAGE / 100)
  );

  const totalPayout = selectedAmount;

  // Slider Change
  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  // Reset Button
  const handleReset = () => {
    setSliderValue(0);
  };

  return (
    <Card>
      <Stack spacing={2}>

        <CardTitle>
          Summary
        </CardTitle>

        <SummaryRow
          label="Term"
          value="12 months"
        />

        <SummaryRow
          label="Selected contracts"
          value={3}
        />

        <SliderSection
          value={sliderValue}
          onSliderChange={handleSliderChange}
          onReset={handleReset}
        />

        <AmountInfo
          amount={selectedAmount}
        />

        <PaymentRow
          label="Pay back amount"
          value={`$${payBackAmount.toLocaleString()}`}
        />

        <RateRow
  percentage={RATE_PERCENTAGE}
  amount={rateAmount}
/>

        <DividerLine />

        <PaymentRow
          label="Total Payout"
          value={`$${totalPayout.toLocaleString()}`}
        />

        <CustomButton fullWidth>
          Review Your Credit
        </CustomButton>

      </Stack>
    </Card>
  );
}

export default SummaryCard;