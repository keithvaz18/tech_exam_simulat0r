rm tech_exam_simulator*.zip
zip -r tech_exam_simulator.zip . -x ".git/*" -x "assets/*.png"
rm tech_exam_simulator_png1.zip
zip -r tech_exam_simulator_png1.zip assets/[A-M]*.png
rm tech_exam_simulator_png2.zip
zip -r tech_exam_simulator_png2.zip assets/*.png -x "assets/[A-M]*.png"