/*globals TestControls Forms*/
TestControls.FlowLayoutHorizontal = SC.ScrollView.design({
    topToolbar: SC.NavigationBarView.design({
        layout: { top: 0, left: 0, right: 0, height: 32 },
        childViews: "label back".w(),
        back: SC.ButtonView.design({
            title: "Groups",
            theme: "point-left",
            action: "back",
            isSwipeLeft: YES,
            layout: {left: 7, centerY: 0, height: 44, width: 80 },
            controlSize: SC.HUGE_CONTROL_SIZE
            }),

        label: SC.LabelView.design({
            textAlign: SC.ALIGN_CENTER,
            layout: { left: 30, centerY: 0, height: 20, right: 10 },
            value: "Categories",
            classNames: "embossed".w()
            })
        }),
          
    classNames: ["sc-source-list-background"],
    contentView: SC.View.design({
        layout: { left: 0, top: 0, right: 0, bottom: 0 },
        contentValueKey: "name",
        childViews: "form".w(),
        form: SC.FormView.design({
          classNames: ["sample_controls"],
          layout: { left: 2, top: 4, right: 2, bottom: 4 },
          childViews: "header horizontal".w(),
          header: SC.LabelView.design({
            layout: { width: 140, height: 24 },
            classNames: "header".w(),
            value: "Flow Layout"
          }),
        horizontal: SC.FormView.row("Row:", SC.View.extend(SC.Animatable, SC.FlowedLayout, SC.AutoMixin, {
            isSpacer: YES,
            
            init: function() {
              sc_super();
              this.style.overflow = "visible";
              SC.Timer.schedule({
                target: this,
                action: "hideOne",
                interval: 2000,
                repeats: YES
              });
            },
            
            hideOne: function() {
              if (this._hasHidden) this.b.set("isVisible", YES);
              else this.b.set("isVisible", NO);
              this._hasHidden = !this._hasHidden;
            },
      
            autoMixins: [SC.Animatable, {
              transitions: { left: 0.25, top: 0.25, width: 0.25 }
            }],
            
            childViews: "a s b s2 c".w(),
            layout: { width: 120 },
            align: SC.ALIGN_RIGHT,
            layoutDirection: SC.LAYOUT_HORIZONTAL,
            defaultFlowSpacing: {
              left: 2, top: 2, right: 2, bottom: 0
            },
            a: SC.ButtonView.design({ flowSpacing: { top: 1, left: 2, right: 1, bottom: 1 }, layout: {width: 44, height: 24}, title: "a" }),
            s: SC.View.design({ isSpacer: YES, spaceUnits: 2, backgroundColor: "gray", layout: {width: 0, height: 24} }),
            b: SC.ButtonView.design({ layout: {width: 44, height: 24}, title: "b" }),
            s2: SC.View.design({ isSpacer: YES, spaceUnits: 1, backgroundColor: "gray", layout: {width: 0, height: 24} }),
            c: SC.ButtonView.design({ layout: {width: 44, height: 24 }, title: "c" }),
          }))
        })
    })
})
