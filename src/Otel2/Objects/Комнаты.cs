﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Otel2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Комнаты.
    /// </summary>
    // *** Start programmer edit section *** (Комнаты CustomAttributes)

    // *** End programmer edit section *** (Комнаты CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КомнатыE", new string[] {
            "Отели as \'Отели\'",
            "ID as \'ID\'",
            "КомнатаОтеля as \'Комната отеля\'",
            "Этаж as \'Этаж\'",
            "Отели.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Отели.Наименование"})]
    [MasterViewDefineAttribute("КомнатыE", "Отели", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("КомнатыL", new string[] {
            "Отели.Наименование as \'Наименование\'",
            "ID as \'ID\'",
            "КомнатаОтеля as \'Комната отеля\'",
            "Этаж as \'Этаж\'"})]
    public class Комнаты : ICSSoft.STORMNET.DataObject
    {
        
        private int fID;
        
        private int fКомнатаОтеля;
        
        private int fЭтаж;
        
        private IIS.Otel2.Отели fОтели;
        
        // *** Start programmer edit section *** (Комнаты CustomMembers)

        // *** End programmer edit section *** (Комнаты CustomMembers)

        
        /// <summary>
        /// ID.
        /// </summary>
        // *** Start programmer edit section *** (Комнаты.ID CustomAttributes)

        // *** End programmer edit section *** (Комнаты.ID CustomAttributes)
        public virtual int ID
        {
            get
            {
                // *** Start programmer edit section *** (Комнаты.ID Get start)

                // *** End programmer edit section *** (Комнаты.ID Get start)
                int result = this.fID;
                // *** Start programmer edit section *** (Комнаты.ID Get end)

                // *** End programmer edit section *** (Комнаты.ID Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Комнаты.ID Set start)

                // *** End programmer edit section *** (Комнаты.ID Set start)
                this.fID = value;
                // *** Start programmer edit section *** (Комнаты.ID Set end)

                // *** End programmer edit section *** (Комнаты.ID Set end)
            }
        }
        
        /// <summary>
        /// КомнатаОтеля.
        /// </summary>
        // *** Start programmer edit section *** (Комнаты.КомнатаОтеля CustomAttributes)

        // *** End programmer edit section *** (Комнаты.КомнатаОтеля CustomAttributes)
        public virtual int КомнатаОтеля
        {
            get
            {
                // *** Start programmer edit section *** (Комнаты.КомнатаОтеля Get start)

                // *** End programmer edit section *** (Комнаты.КомнатаОтеля Get start)
                int result = this.fКомнатаОтеля;
                // *** Start programmer edit section *** (Комнаты.КомнатаОтеля Get end)

                // *** End programmer edit section *** (Комнаты.КомнатаОтеля Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Комнаты.КомнатаОтеля Set start)

                // *** End programmer edit section *** (Комнаты.КомнатаОтеля Set start)
                this.fКомнатаОтеля = value;
                // *** Start programmer edit section *** (Комнаты.КомнатаОтеля Set end)

                // *** End programmer edit section *** (Комнаты.КомнатаОтеля Set end)
            }
        }
        
        /// <summary>
        /// Этаж.
        /// </summary>
        // *** Start programmer edit section *** (Комнаты.Этаж CustomAttributes)

        // *** End programmer edit section *** (Комнаты.Этаж CustomAttributes)
        public virtual int Этаж
        {
            get
            {
                // *** Start programmer edit section *** (Комнаты.Этаж Get start)

                // *** End programmer edit section *** (Комнаты.Этаж Get start)
                int result = this.fЭтаж;
                // *** Start programmer edit section *** (Комнаты.Этаж Get end)

                // *** End programmer edit section *** (Комнаты.Этаж Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Комнаты.Этаж Set start)

                // *** End programmer edit section *** (Комнаты.Этаж Set start)
                this.fЭтаж = value;
                // *** Start programmer edit section *** (Комнаты.Этаж Set end)

                // *** End programmer edit section *** (Комнаты.Этаж Set end)
            }
        }
        
        /// <summary>
        /// Комнаты.
        /// </summary>
        // *** Start programmer edit section *** (Комнаты.Отели CustomAttributes)

        // *** End programmer edit section *** (Комнаты.Отели CustomAttributes)
        [PropertyStorage(new string[] {
                "Отели"})]
        [NotNull()]
        public virtual IIS.Otel2.Отели Отели
        {
            get
            {
                // *** Start programmer edit section *** (Комнаты.Отели Get start)

                // *** End programmer edit section *** (Комнаты.Отели Get start)
                IIS.Otel2.Отели result = this.fОтели;
                // *** Start programmer edit section *** (Комнаты.Отели Get end)

                // *** End programmer edit section *** (Комнаты.Отели Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Комнаты.Отели Set start)

                // *** End programmer edit section *** (Комнаты.Отели Set start)
                this.fОтели = value;
                // *** Start programmer edit section *** (Комнаты.Отели Set end)

                // *** End programmer edit section *** (Комнаты.Отели Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КомнатыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КомнатыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КомнатыE", typeof(IIS.Otel2.Комнаты));
                }
            }
            
            /// <summary>
            /// "КомнатыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КомнатыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КомнатыL", typeof(IIS.Otel2.Комнаты));
                }
            }
        }
    }
}
